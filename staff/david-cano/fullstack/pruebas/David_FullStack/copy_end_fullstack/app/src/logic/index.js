// Importamos las herramientas que creamos para realizar diferentes acciones.
import createNewPost from './createNewPost';
import deletePost from './deletePost';
import getLoggedInUserId from './getLoggedInUserId';
import isUserLoggedIn from './isUserLoggedIn';
import loginUser from './loginUser';
import logoutUser from './logoutUser';
import registerUser from './registerUser';
import retrieveMyPosts from './retrieveMyPosts';
import retrievePosts from './retrievePosts';
import retrieveSavedPosts from './retrieveSavedPosts';
import retrieveUser from './retrieveUser';
import toggleLikePost from './toggleLikePost';
import toggleSavePost from './toggleSavePost';

// Creamos un objeto llamado 'logic' que contiene todas estas herramientas.
const logic = {
    createNewPost,
    deletePost,
    getLoggedInUserId,
    isUserLoggedIn,
    loginUser,
    logoutUser,
    registerUser,
    retrieveMyPosts,
    retrievePosts,
    retrieveSavedPosts,
    retrieveUser,
    toggleLikePost,
    toggleSavePost
};

// Exportamos el objeto 'logic' para que otras partes de nuestro programa puedan usar estas herramientas.
export default logic;
