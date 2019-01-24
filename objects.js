var playlist= {
  artistnames:"song titles"
}

function updatePlaylist(playlist,artistname,songtitle){
  playlist[artistname]=songtitle 
  return playlist
}

function removeFromPlaylist(playlist,artistname){
  object.assign
  delete playlist.artistname;
  return playlist
}