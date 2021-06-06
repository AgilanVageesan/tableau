import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Subscription } from 'rxjs';
import { CovidrepoService } from 'src/app/services/covidrepo/covidrepo.service';
import { MovierepoService } from 'src/app/services/movierepo/movierepo.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
})
export class TableauComponent implements OnInit {
  @ViewChild('agGrid')
  agGrid: AgGridAngular;
  gridOptions: any;
  defaultGridOptions: any;
  popularMovies: any = [];
  covidCasesList: any = [];
  rowData:any=[];
  gridApi:any;
  gridColumnApi:any;

  title = "What's Popular";
  columnDefs = [
    { field: 'Country', sortable: true, resizable: true, filter: true },
    { field: 'Cases', sortable: true, resizable: true, filter: true },
    { field: 'Deaths', sortable: true, resizable: true, filter: true },
    { field: 'Recovered', sortable: true, resizable: true, filter: true },
    { field: 'Active', sortable: true, resizable: true, filter: true },
    { field: 'TodayCases', sortable: true, resizable: true, filter: true },
    { field: 'TodayDeaths', sortable: true, resizable: true, filter: true },
    { field: 'TodayRecovered', sortable: true, resizable: true, filter: true },
    { field: 'Critical', sortable: true, resizable: true, filter: true },
    { field: 'Tests', sortable: true, resizable: true, filter: true },
    {
      field: 'TestsPerOneMillion',
      sortable: true,
      resizable: true,
      filter: true,
    },
    { field: 'Population', sortable: true, resizable: true, filter: true },
    {
      field: 'ActivePerOneMillion',
      sortable: true,
      resizable: true,
      filter: true,
    },
    {
      field: 'CasesPerOneMillion',
      sortable: true,
      resizable: true,
      filter: true,
    },
    {
      field: 'DeathsPerOneMillion',
      sortable: true,
      resizable: true,
      filter: true,
    },
    {
      field: 'RecoveredPerOneMillion',
      sortable: true,
      resizable: true,
      filter: true,
    },
  ];

  constructor(private covidService: CovidrepoService) {}

  ngOnInit() {
    this.InitGrid();
    this.GetCovidCases();
  }

  InitGrid() {
    this.defaultGridOptions = {
      defaultColDef: { resizable: true, sortable: true, autoHeight: true },
      pagination: true,
      paginationPageSize: 10,
      suppressPaginationPanel: true,
      animateRows: true,
      suppressDragLeaveHidesColumns: true,
    };
    this.gridOptions = Object.assign({}, this.defaultGridOptions, {
      columnDefs: this.columnDefs,
    });
  }

  GetCovidCases() {
    this.covidService.GetCovidDetailsByCountry().subscribe((data: any) => {
      this.covidCasesList = data;
      this.AssignCovidDataToGrid();
    });
  }
  AssignCovidDataToGrid() {
    let covidCases = this.covidCasesList.map((data: any) => ({
      Country: data.country,
      Cases: data.cases,
      Deaths: data.deaths,
      Recovered: data.recovered,
      Active: data.active,
      TodayCases: data.todayCases,
      TodayDeaths: data.todayDeaths,
      TodayRecovered: data.todayRecovered,
      Critical: data.critical,
      Tests: data.tests,
      TestsPerOneMillion: data.testsPerOneMillion,
      Population: data.population,
      ActivePerOneMillion: data.activePerOneMillion,
      CasesPerOneMillion: data.casesPerOneMillion,
      DeathsPerOneMillion: data.deathsPerOneMillion,
      RecoveredPerOneMillion: data.recoveredPerOneMillion,
    }));
    console.log(covidCases);
    this.rowData=covidCases;
    this.sortByCasesDesc();
  }

  getSelectedRows(): void {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    console.log(selectedData);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

  }
  sortByCasesDesc() {
    this.gridColumnApi.applyColumnState({
      state: [
        {
          colId: 'Cases',
          sort: 'desc',
        },
      ],
      defaultState: { sort: null },
    });
  }
}
