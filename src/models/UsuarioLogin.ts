export interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string; 
    senha: string;
    foto: string|null; 
    token?: string|null; 
}

export default UsuarioLogin; 