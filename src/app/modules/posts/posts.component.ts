import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { PollsComponent } from '../polls/polls.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
  actions: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  pageName = "posts";
  //updatePageName: string;

  dataSource: MatTableDataSource<UserData>;
  posts: UserData[];
  Columns: string[] = ['id', 'name', 'progress', 'fruit', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  searchKey: string;

  showButton: boolean = false;

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog: MatDialog) {
    this.posts = [{
      id: '1',
      name: '1',
      progress: '1',
      fruit: '1',
      actions: '1',
    },{
      id: '2',
      name: '1',
      progress: '1',
      fruit: '1',
      actions: '1',
    },{
      id: '3',
      name: '1',
      progress: '1',
      fruit: '1',
      actions: '1',
    },{
      id: '4',
      name: '1',
      progress: '1',
      fruit: '1',
      actions: '1',
    },{
    id: '5',
    name: '1',
    progress: '1',
    fruit: '1',
    actions: '1',
  }, {
    id: '6',
    name: '1',
    progress: '1',
    fruit: '1',
    actions: '1',
  },{
    id: '7',
    name: '1',
    progress: '1',
    fruit: '1',
    actions: '1',
  },{
    id: '8',
    name: '1',
    progress: '1',
    fruit: '1',
    actions: '1',
  },{
    id: '9',
    name: '1',
    progress: '1',
    fruit: '1',
    actions: '1',
  },{
    id: '10',
    name: '1',
    progress: '1',
    fruit: '1',
    actions: '1',
  },{
    id: '11',
    name: '1',
    progress: '1',
    fruit: '1',
    actions: '1',
  }];
    this.dataSource = new MatTableDataSource(this.posts)
   }

  ngOnInit() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  // onClick(buttonName) {
  //   this.pageName = this.updatePageName;
  // }

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

  onCreate(){
    this.dialog.open(PollsComponent);
  }

}
