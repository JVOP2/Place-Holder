import { Component, OnInit } from '@angular/core';
import { PlaceHolderService } from '../place-holder.service';

@Component({
  selector: 'app-place-holder',
  standalone: false,
  templateUrl: './place-holder.component.html',
  styleUrl: './place-holder.component.css'
})
export class PlaceHolderComponent implements OnInit{
  constructor(private service: PlaceHolderService) { }
  placeholders: any[] = []

  load(): void {
    this.service.getPlaceHolder().subscribe(
      json => this.placeholders = json
    )
  }

  ngOnInit(): void {
    this.load()
  }
}
