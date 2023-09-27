const equipmentExists = () => `Equipment name alreadys exists`;
const listItemAdded = (list: string, name: string) => `The ${ list } ${ name } has been added.`
const deleteEquipmentMessages = (name: string) => ([
  'Deleting the equipment',
  name,
  'will',
  'permanently delete',
  'the entry from the database along with all associated data.',
  `All open work orders and work order history will be removed,
  which will cause cost and part usage report data to change. 
  This is not recoverable in any way except to restore a complete 
  database backup.`,
  'This action cannot be undone, do you wish to continue?'
]) 

export const resources = {
  deleteEquipmentMessages,
  equipmentExists,
  listItemAdded
}