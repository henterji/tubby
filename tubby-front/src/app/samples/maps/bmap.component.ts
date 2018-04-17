import { Component, OnInit } from '@angular/core';
import {
  MapOptions,
  NavigationControlOptions,
  OverviewMapControlOptions,
  ScaleControlOptions,
  MapTypeControlOptions,
  ControlAnchor,
  NavigationControlType,
  MapTypeControlType,
  Point,
  MarkerOptions
} from 'angular2-baidu-map'

@Component({
  selector: 'sample-bmap',
  templateUrl: './bmap.component.html',
  styles: [`
    baidu-map {
      width: 100%;
      height: 500px;
      display: block;
    }
  `]
})
export class BMapComponent implements OnInit {
  private opts: MapOptions;
  private markers: Array<{ point: Point; options?: MarkerOptions }>
  private controlOpts: NavigationControlOptions;
  private overviewmapOpts: OverviewMapControlOptions;
  private scaleOpts: ScaleControlOptions;
  private mapTypeOpts: MapTypeControlOptions;

  public ngOnInit() {
    this.opts = {
      centerAndZoom: {
        lat: 40.0612540000,
        lng: 116.4177150000,
        zoom: 17
      },
      enableKeyboard: true
    };

    this.markers = [
      {
        point: {
          lat: 31.207224,
          lng: 121.629715
        }
      }
    ]

    this.controlOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
    }

    this.overviewmapOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,
      isOpen: true
    }

    this.scaleOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
    }

    this.mapTypeOpts = {
      type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL
    }
  }

  private showWindow({ e, marker, map }: any): void {
    map.openInfoWindow(
      new window.BMap.InfoWindow('地址：益丰路55弄1～144号', {
        offset: new window.BMap.Size(0, -30),
        title: '春港丽园'
      }),
      marker.getPosition()
    )
  }

  private loadMap(e: any) {
    console.log(e);
  }

  private clickMarker(marker: any) {
    console.log(marker);
  }
}
