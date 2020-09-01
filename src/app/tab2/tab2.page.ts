import { Component, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Map,tileLayer,marker} from 'leaflet';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  latitude: any = 0;
  longitude: any = 0;
  map: Map;
  zoomLevel: number = 11;
  newMarker: any;
  @ViewChild('mapId') mapContainer;

  constructor(private geolocation: Geolocation) {}

    

    displayMap() {
      if(this.map){
        // this.map.off();
        // this.map.remove();
        //document.getElementById(this.mapContainer).outerHTML = "";
        this.loadMap();
      }
      this.loadMap();
    }

    // ionViewDidEnter() {
    //   this.loadMap();
    //   }

    options = {
      timeout: 10000,
      enableHighAccuracy: true,
      maximumAge: 3600
    };    

    // Use geolocation to get user's device coordinates
    getCurrentCoordinates() {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
       }).catch((error) => {
         console.log('Error getting location', error);
       });
       console.log(`Position:` + this.latitude + this.longitude);
  }
    loadMap() {
      this.map = new Map('mapId').setView([this.latitude, this.longitude], this.zoomLevel);
      tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', 
      {	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
      .addTo(this.map);
      console.log(`loadMap position:` + this.latitude + this.longitude);
    }

    loadMarker() {
      this.newMarker.setLatLng([this.latitude, this.longitude])
      .addTo(this.map);
    }
}
