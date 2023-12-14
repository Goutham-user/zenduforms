import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss']
})
export class HereMapComponent implements OnInit {

  @ViewChild('map', { static: true }) mapElement!: ElementRef;

  private platform: any;
  private map: any;
  private ui: any;

  ngOnInit() {
    this.platform = new (window as any).H.service.Platform({
      apikey: 'HDveG1y-6fZklPdMjvXFXyh7NoaNx5_FV4O4MpbS-34',
    });

    const defaultLayers = this.platform.createDefaultLayers();
    this.map = new (window as any).H.Map(this.mapElement.nativeElement, defaultLayers.vector.normal.map, {
      zoom: 10,
      center: {
        lat: 17.3949,
        lng: 78.47073,
      },
    });

    // zoom controls
    this.ui = (window as any).H.ui.UI.createDefault(this.map, defaultLayers);

    // markers
    this.addMarker({ lat: 17.23652, lng: 78.42938 }, 'Hyderabad Airport');
    this.addMarker({ lat: 17.39086, lng: 78.55855 }, 'Nagole Metro');
    this.addMarker({ lat: 17.4493, lng: 78.3835 }, 'Hi-Tech City Metro');
    this.addMarker({ lat: 17.34976, lng: 78.54744 }, 'LB Nagar Metro');
    this.addMarker({ lat: 17.49632, lng: 78.37363 }, 'Raidurg Metro');

  }

  private addMarker(position: { lat: number, lng: number }, label: string) {
    const marker = new (window as any).H.map.Marker(position);
    this.map.addObject(marker);

    // To display lables on markers
    // const bubble = new (window as any).H.ui.InfoBubble(position, {
    //     content: label,
    // });

    // this.ui.addBubble(bubble);
  }
}
// 17.4576, 78.37345
// 17.45754, 78.37436
// 17.45754, 78.37436