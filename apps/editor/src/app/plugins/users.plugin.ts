import { Plugin } from 'ckeditor5';

/**
 * The `UsersIntegration` lets you manage user data and permissions.
 *
 * This is an essential feature when many users work on the same document.
 *
 * To read more about it, visit the CKEditor 5 documentation: https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/users.html.
 */
export class UsersIntegration extends Plugin {
  static get requires() {
    return ['Users'];
  }

  static get pluginName() {
    return 'UsersIntegration';
  }

  init() {
    const usersPlugin = this.editor.plugins.get('Users');

    // These are sample users for demonstration purposes.
    // In your integration make sure to provide user data from your data source.
    const users = [
      { id: 'user-1', name: 'Zee Croce' },
      { id: 'user-2', name: 'Mex Haddox' },
    ];
    const me = users[0];

    for (const user of users) {
      usersPlugin.addUser(user);
    }

    usersPlugin.defineMe(me.id);
  }
}
