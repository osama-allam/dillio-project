import { IContactUsSubject } from '../_model/icontactus-subject';

export class ContactSubjectService{
    subjects: IContactUsSubject[] = [
        {id: 1, name:'Arts'},
        {id: 2, name:'Books'},
        {id: 3, name:'Eletronics'},
        {id: 4, name:'TVs'}
    ];

    getAll() : IContactUsSubject[] {
        return this.subjects;
    }
}