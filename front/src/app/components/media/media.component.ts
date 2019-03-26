import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';
import {Media} from '../../models/Media';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  media: Observable<Media[]>;
  constructor(private wp:MediaService) {
    this.media = this.wp.getMedia();
  }

  ngOnInit() {
  }

}
