import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'


//cria o tipo de usuario (para o ts)
export interface UserInstance extends Model {
    id: number
    nome: string
    idade: number
}

// nome do model == "User"
//defines ps tipo para o sequelize
export const User = sequelize.define<UserInstance>('User', {//configs
    id: { primaryKey: true, type: DataTypes.INTEGER },
    nome: { type: DataTypes.STRING },
    idade: { type: DataTypes.INTEGER, defaultValue: 18, }
}, {// propriedades do sequelizer
    tableName: 'user',
    timestamps: false//não salva createAt nem updateAt (automaticamente não)
})