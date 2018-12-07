import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presence-check',
  templateUrl: './presence-check.component.html',
  styleUrls: ['./presence-check.component.css']
})
export class PresenceCheckComponent implements OnInit {

  pitStudents : Array<String> = ["Niemczyk Jerzy","Jacek Matczyński", "Oliwia Masian", "Konrad Kubzdela", "Jakub Tomczak", "Filip Błaszczyk"]

  prStudents : Array<String> = ["Jacek Matczyński", "Niemczyk Jerzy", "Łukasz Szymankiewicz", "Mikołaj Śledź", "Mateusz Kudła"]

  constructor() { }

  ngOnInit() {
  }

}
