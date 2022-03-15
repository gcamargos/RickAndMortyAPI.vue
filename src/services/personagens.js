import {http} from './config'

export default{
    listar: () =>{
        return http.get('listar')
    },
    salvar: (carinha) =>{
        return http.post('adicionar', carinha)
    }
}