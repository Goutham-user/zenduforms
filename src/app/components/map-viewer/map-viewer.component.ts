import { Component } from '@angular/core';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent {
  markers: any[] = [
    {
      location: 'Airport',
      from: 'airport@hyd.com',
      to: 'airport@mumbai.com',
      completed: true,
      dueDate: '06 December'
    },
    {
      location: 'Nagole Metro Station',
      from: 'metro@hyd.com',
      to: 'metro@mumbai.com',
      completed: true,
      dueDate: '06 December'
    },
    {
      location: 'Hi-Tech City Metro Station',
      from: 'metro@hyd.com',
      to: 'metro@mumbai.com',
      completed: false,
      dueDate: '16 December'
    },
    {
      location: 'LB Nagar Metro Station',
      from: 'metro@hyd.com',
      to: 'metro@mumbai.com',
      completed: false,
      dueDate: '26 December'
    },
    {
      location: 'Raidurg Metro Station',
      from: 'metro@hyd.com',
      to: 'metro@mumbai.com',
      completed: false,
      dueDate: '05 January'
    }
  ]

}
