import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Organisation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public userId: number

  @manyToMany(() => User, { pivotTable: 'affiliations' })
  public users: ManyToMany<typeof User>

  @belongsTo(() => User)
  public userOwner: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
