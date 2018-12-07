import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  pitStudentsI3 : Array<String> = ["Niemczyk Jerzy","Jacek Matczyński", "Oliwia Masian", "Konrad Kubzdela", "Jakub Tomczak", "Filip Błaszczyk"]

  pitStudentsI2 : Array<String> = ["Kajetan Zimniak", "Kamil Nowak", "Mateusz Kowalski", "Agata Kowal"]

  prStudents : Array<String> = ["Jacek Matczyński", "Niemczyk Jerzy", "Łukasz Szymankiewicz", "Mikołaj Śledź", "Mateusz Kudła"]

  constructor() { }

  ngOnInit() {
  }

}
