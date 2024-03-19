/**
 *  Modulo para trabalhar com apis. Disponibiliza as rotas da api bem como o servico com a biblioteca axios
 */
import axios from "axios";


/**
 *  Rota para o recursoMachine
 */
export const machineResource = '/machine'

// Rota para Types User
export const typesUserResource = '/types'

// Rota para Users
export const usersResource = '/users'


// Rota para User Machine
export const userMachineResource = '/user-machine'

//Rota para Photo   
export const PhotoResource = '/photo'



const apiPort = '8081';
 const localApiUri = `http://localhost:${apiPort}`;


const api = axios.create({
     baseURL:localApiUri
    //baseURL:externalApiUri
});

export default api;