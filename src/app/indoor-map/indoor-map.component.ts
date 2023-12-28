import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-indoor-map',
  templateUrl: './indoor-map.component.html',
  styleUrl: './indoor-map.component.css'
})
export class IndoorMapComponent implements AfterViewInit {
  private map: any;
  // private featureGroup: L.FeatureGroup;

  // osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   maxZoom: 19,
  //   attribution: 'OpenStreetMap'
  // })

  ngAfterViewInit(): void {
    this.map = L.map('map', { 
      crs: L.CRS.Simple,
    });
    this.initializeMap();
  }

  initializeMap() {
    // this.osm.addTo(this.map);
    const bounds: L.LatLngBoundsExpression = [[0,0], [853,1024]];
    const imageLayer = L.imageOverlay('assets/floorplan.png', bounds);
    imageLayer.addTo(this.map);
    this.map.fitBounds(bounds);
    // ... this.featureGroup = L.featureGroup()


  }

}
