import { Client, Databases } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Endpoint Cloud lu
    .setProject('6ab7465500173a87fcd0'); // Project ID lu

export const databases = new Databases(client);