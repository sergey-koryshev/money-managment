import { SortEvent, TableColumn } from '@components/table/table.model';
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { Expense } from '@app/models/expense.model';
import { priceComparer } from '@app/helpers/comparers.helper';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent {

  @Input()
  data: Expense[];

  columns: TableColumn<Expense>[] = [
    {
      name: 'date',
      displayName: 'Date',
      function: (row: Expense) => new Date(row.date).toLocaleDateString()
    },
    {
      name: 'item',
      displayName: 'Item(s)'
    },
    {
      name: 'price',
      displayName: 'Price',
      template: () => this.price,
      sortFunc: priceComparer
    }
  ];

  defaultSorting: SortEvent = {
    column: 'date',
    direction: 'asc'
  }

  @ViewChild('price', { read: TemplateRef, static: true })
  price: TemplateRef<unknown>;
}
