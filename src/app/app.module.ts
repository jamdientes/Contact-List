import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';  


var firebaseConfig = {
  apiKey: "AIzaSyCO_5_DeDPwE43mlw0Q4EefGWN7qS8ULs8",
    authDomain: "contactlist-574be.firebaseapp.com",
    databaseURL: "https://contactlist-574be.firebaseio.com",
    projectId: "contactlist-574be",
    storageBucket: "contactlist-574be.appspot.com",
    messagingSenderId: "14137441684"
};

@NgModule({                                                                                                                                                                                                                    
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  
    AngularFirestoreModule,    
    FormsModule                         
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
