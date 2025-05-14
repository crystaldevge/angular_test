import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  template: `
  <div>
    <button
          (click)="show()"
          class="btn btn-primary" 
          type="button"
        >
          Show Users
        </button>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>login</th>
            <th>avatar_url</th>
            <th>events_url</th>
            <th>followers_url</th>
            <th>following_url</th>
            <th>gists_url</th>
            <th>node_id</th>
            <th>organizations_url</th>
            <th>received_events_url</th>
            <th>repos_url</th>
            <th>site_admin</th>
            <th>starred_url</th>
            <th>subscriptions_url</th>
            <th>type</th>
            <th>url</th>
            <th>user_view_type</th>
          </tr>
        </thead>
        <tbody *ngIf="isVisible && users.length > 0">
          <tr *ngFor="let user of this.users">
            <td>{{user.id}}</td>
            <td>{{user.login}}</td>
            <td><img [src]="user.avatar_url" alt="Avatar" width="50" height="50"></td>
            <td>{{user.events_url}}</td>
            <td>{{user.followers_url}}</td>
            <td>{{user.following_url}}</td>
            <td>{{user.gists_url}}</td>
            <td>{{user.node_id}}</td>
            <td>{{user.organizations_url}}</td>
            <td>{{user.received_events_url}}</td>
            <td>{{user.repos_url}}</td>
            <td>{{user.site_admin}}</td>
            <td>{{user.starred_url}}</td>
            <td>{{user.subscriptions_url}}</td>
            <td>{{user.type}}</td>
            <td>{{user.url}}</td>
          </tr>
        </tbody>
      </table>
  </div>
  `,
  
  imports: [CommonModule]
})
export class UsersComponent {
  isVisible = false;

  users: any[] = [];

  async show() {
    console.log('Hello from Angular!');
    this.isVisible = true;
    const mod = await import('dashboard_test/callGithubUser');
    


    const result = await mod.callGithubUser();
    console.log(result);

    this.users = result;
    console.log(this.users);
    // this.message = result;

  }
}
