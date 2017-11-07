# Youdl. Listen to music without wasting mobile data.

Youdl is a mobile app that let's you listen(emphasis on listen) while consuming less data than you would normally do.

A tipical use case will be that you want to watch a podcast on youtube but you don't care about the video part. Even better maybe you don't care about the audio quality and choose to reencode it to a lower bitrate to save data consumtion.

## Description

As a user you will have the ability to create, edit, delete playlists, add, remove songs from playlists, edit playlist/song data eg: title, description etc. Another feature of the application is the ability to keep downloaded items on to the disk, this means you can listen to files even offline. 

Once authentificated(account creation is free) you can configure the start managing you're library, edit application settings(eg: change desired bitrate for audio) or simply search for new data to convert/download. For task that require long processing time, a asynchronous task manager is used, this means that you don't have to wait for something to finish, you can do something else and when the task is done you will get either an email or a app notification.

By syncronizing all the local data on an external server, you will have everything in one place, no matter if you use a phone, tablet or even a Mac.

Need more power? Try the applications cli to integrate youdl in you're app. By making a public API you can manage youdl externally without a fuss.

Leverages the power of React-Native to bring complex, modern and performant UI to a multitude of devices, just to name a few: a windows machine, an android phone and a Ipad with one codebase.


## Reason
This is achived by ripping the audio part from the video and optionally convert's it to a lower bitstream format using ffsmeg.

## Architecture
* [ ] CRUD user interfaces.
  > Create edit delete playlists, add/remove songs in playlist ...
* [ ] Offline support (sync adapters).
  > You can access already downloaded data even offline
* [ ] Persist data on the local storage.
  > See above
* [ ] Display a chart when presenting item details.
  > Chart details will be used when presenting usage savings over a perioud of time
* [ ] Use dialogs and pickers.
  > See above
* [ ] Online support.
  > Data will be streamed from an online service eg: Youtube
* [ ] Implement CRUD REST client operations.
  > See first item
* [ ] Notifications (gcm, ws, etc.)
  > For longer tasks an optional notifications system will be implemented
* [ ] Synchronize the content with a remote location.
  > A server will be used to store all of the user data.
* [ ] Authentication (jwt, oauth).
  > See above.
* [ ] Submit data on background threads or/using promises.
  > For tasks that require audio format conversions
* [ ] Navigates between screens/views.
  > User will be able to jump to a playlist view, settings view, stats view.
* [ ] Manage the application state outside the user interface layer.
  > App will have a cli interface in order for it to be better managed/combined by an external tool
* [ ] Use the observer pattern to notify the user interface about the changes occurred internally.
  > App events
* [ ] For extra points: Use different layouts, depending on the device size (phone, tablet, etc.).
* [ ] Both in React-Native and Android/iOS
