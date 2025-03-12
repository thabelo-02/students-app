// import SQLite from 'react-native-sqlite-storage';

// const db = SQLite.openDatabase(
//   {
//     name: 'userDatabase.db',
//     location: 'default',
//   },
//   () => {},
//   error => {
//     console.log('Error opening database: ', error);
//   }
// );

// const createTable = () => {
//   db.transaction(tx => {
//     tx.executeSql(
//       'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT, phone TEXT, password TEXT)',
//       [],
//       () => {
//         console.log('Table created successfully');
//       },
//       error => {
//         console.log('Error creating table: ', error);
//       }
//     );
//   });
// };

// export const initDatabase = () => {
//   createTable();
// };

// export const addUser = (username, email, phone, password) => {
//   db.transaction(tx => {
//     tx.executeSql(
//       'INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)',
//       [username, email, phone, password],
//       () => {
//         console.log('User added successfully');
//       },
//       error => {
//         console.log('Error adding user: ', error);
//       }
//     );
//   });
// };

// export default db;