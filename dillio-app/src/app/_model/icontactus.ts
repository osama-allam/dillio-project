import {IContactUsSubject} from '../_model/icontactus-subject';

export interface IContactUs
{
   id? : number;
   name?: string; 
   email?: string; 
   message?: string; 
   subject?: IContactUsSubject;
   fkSubjectId?: number;
}