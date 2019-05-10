import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "./services/spotify.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "SpotiBuho";
  viewRoutes: boolean;

  constructor(private spotify: SpotifyService) {
    this.viewRoutes = false;
  }

  ngOnInit() {
    this.spotify.getNewToken().subscribe(data => {
      if (data) {
        this.viewRoutes = true;
      }
    });
  }
}
