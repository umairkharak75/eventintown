import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit,OnChanges {

  displayedColumns
  dataSource
  @Input() columnsDefs
  @Input() rowData
  @Output()
  editEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onDeleteEmitter: EventEmitter<any> = new EventEmitter<any>();


  
  constructor(){}
  ngOnChanges(changes){
    console.log(this.rowData)
    this.dataSource = new MatTableDataSource(this.rowData);
  }
  ngOnInit(){
    this.displayedColumns=this.columnsDefs
   
  }


  edit(params){
    this.editEmitter.emit(params)
  }
  delete(params)
  {
    console.log(params)
    this.onDeleteEmitter.emit(params)
  }
}
