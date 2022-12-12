import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { PollsAddComponent } from './polls-add/polls-add.component';
import { PollsEditComponent } from './polls-edit/polls-edit.component';
import { NotificationService } from 'src/app/shared/notification.services';
import { DialogService } from 'src/app/shared/dialog.service';
//import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable, throwError } from 'rxjs';
//import { catchError, map } from 'rxjs/operators';

// export interface UserData {
//   city_id: string;
//   city_name: string;
//   progress: string;
//   fruit: string;
//   actions: string;
// }

// @Component({
//   selector: 'app-polls',
//   templateUrl: './polls.component.html',
//   styleUrls: ['./polls.component.scss']
// })

// export class PollsComponent implements OnInit {
//   pageName = "POLLS";
//   //updatePageName: string;
//   //const http: HttpClient;
//   dataSource: MatTableDataSource<UserData>;
//   posts: UserData[];
//   Columns: string[] = ['city_id', 'city_name', 'progress', 'fruit', 'actions'];

export interface UserData {
  id: string;
	name: string;
	shortdesc: string;
	price: string;
  date_start: string;
	date_end: string;
  question_count_all: string;
  question_count_end: string;
  //toggle: string;
  actions: string;
}

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})

export class PollsComponent implements OnInit {
  pageName = "POLLS";
  //updatePageName: string;
  //const http: HttpClient;
  dataSource: MatTableDataSource<UserData>;
  posts: UserData[];
  Columns: string[] = [ 'id', 'name', 'shortdesc', 'price', 'date_start', 'date_end', 'question_count_all', 'question_count_end', 'actions' ]; //'toggle',


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  searchKey: string;

  showButton: boolean = false;

  //data = [];
  constructor(private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService,
    private http: HttpClient) {

    // this.posts = [
    //   { id: '1', name: '1', shortdesc: '1', price: '1', date_start: '1', date_end: '1', question_count_all: '1', question_count_end: '1', actions: '1' },
    //   { id: '2', name: '1', shortdesc: '1', price: '1', date_start: '1', date_end: '1', question_count_all: '1', question_count_end: '1', actions: '1' },
    //   { id: '3', name: '1', shortdesc: '1', price: '1', date_start: '1', date_end: '1', question_count_all: '1', question_count_end: '1', actions: '1' },
    //   { id: '4', name: '1', shortdesc: '1', price: '1', date_start: '1', date_end: '1', question_count_all: '1', question_count_end: '1', actions: '1' }
    // ];
    // this.dataSource = new MatTableDataSource(this.posts)

    this.http.post<any>('https://alnadeko.com/android/server/question_group.php', this.dataSource).subscribe(data => {
      this.posts = data;
      //console.log(this.posts);
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

   }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource(this.posts);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
   }

  applyFilter() {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  addData() {
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    // this.table.renderRows();
  }

  removeData() {
    // this.dataSource.pop();
    // this.table.renderRows();
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  onPollsAdd(){
    //this.service.ini
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.height = "300px";
    this.dialog.open(PollsAddComponent,dialogConfig);
  }

  onPollsEdit(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.height = "300px";
    this.dialog.open(PollsEditComponent,dialogConfig);
  }

  onDelete(id: string){
    this.dialogService.openConfirmDialog('Are you sure delete polls?')
    .afterClosed().subscribe(res =>{
      if(res){
        for(let i = 0; i < this.dataSource.data.length; ++i){
          if (this.dataSource.data[i].id === id) {
              this.dataSource.data.splice(i,1);
          }
        this.notificationService.success('Polls delete successfully');
        this.dataSource._updateChangeSubscription();
        }
      }
    });
  }
}

