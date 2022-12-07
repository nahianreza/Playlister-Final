/*
    This is where we'll route all of the received http requests
    into controller response functions.
    
    @author McKilla Gorilla
*/
const express = require('express')
const PlaylistController = require('../controllers/playlist-controller')
const router = express.Router()
const auth = require('../auth')

router.post('/playlist', auth.verify, PlaylistController.createPlaylist)
router.delete('/playlist/:id', auth.verify, PlaylistController.deletePlaylist)
router.get('/playlist/:id', auth.verify, PlaylistController.getPlaylistById)
router.get('/playlistpairs', auth.verify, PlaylistController.getPlaylistPairs)
router.get('/publishedpairs/:title', auth.verify, PlaylistController.getPublishedPlaylistPairsByTitle)
router.get('/playlists', auth.verify, PlaylistController.getPlaylists)
router.put('/playlist/:id', auth.verify, PlaylistController.updatePlaylist)
router.put('/playlist/comment/:id', auth.verify, PlaylistController.addCommentOnList)
router.get('/publishedpairs/name/:name', auth.verify, PlaylistController.getPublishedPairsByOwnerName)
router.get('/publishedpairs', auth.verify, PlaylistController.getPublishedPlaylistPairs)

module.exports = router