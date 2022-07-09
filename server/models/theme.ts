import {
  DataType,
  Model,
  Table,
  Column,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
  NotEmpty,

} from 'sequelize-typescript';

export interface ITheme {
  id: number;
  userId: number;
  baseTheme: boolean;
}

@Table(
  {
    tableName: "Themes",
    timestamps: false,
    updatedAt: false,
    createdAt: false,
  }
)
export class Theme extends Model implements ITheme {

  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.INTEGER)
  userId: number;

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.BOOLEAN)
  baseTheme: boolean
};


