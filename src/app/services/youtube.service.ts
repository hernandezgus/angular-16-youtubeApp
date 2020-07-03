import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  // https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=&playlistId=&maxResults=10
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'YOUR-API-KEY';
  private playlistId = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor( private http: HttpClient ) { }

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlistId)
      .set('key', this.apiKey);
    return this.http.get(url, { params });
  }
}
