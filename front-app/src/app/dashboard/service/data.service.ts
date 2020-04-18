import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  faculty: any[] = [];
  members: any[] = [];
  private prefix = 'http//localhost:3000/';

  constructor(public http: HttpClient) {
    this.faculty.push('Faculty of Science', 'Faculty of Engineering', 'Faculty of Medicine', 'Faculty of Allied Health Science',
      'Faculty of Dental', 'Faculty of Engineering', 'Faculty of Art', 'Faculty of Management', 'Faculty of Veterinary');

    this.members.push('Ishara Kiwihari', 'Buddhima Amarathunga', 'Malith Kalhara', 'nadeeka Bandara', 'Nilupul Thennakoon', 'Anuththara');
  }

  getFaculties() {
    return Array.from(this.faculty.values());
  }

  getMembers() {
    return Array.from(this.members.values());
  }

  addMember(member){
    return this.http.post(this.prefix + 'api/add', member);
  }
}