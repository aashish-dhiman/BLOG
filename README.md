# BLOG

This is a blog website that I built while learning Node.js and Express.js to explore backend technologies. 
The website allows users to create and publish blog posts, as well as access additional pages such as a contact page, an about page and compose page.

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript) - Templating engine
- Mongoose - MongoDB integration

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/aashish-dhiman/blog.git
   ```
2. Navigate to the project directory:
   ```
   cd blog
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

### Routes
- `/`: Homepage - Displays a list of published blog posts.
- `/compose`: Create a new blog post.
- `/posts/:post-title`: View a specific blog post.
- `/contact`: Contact page.
- `/about`: About page.

### Database Integration
- The blog posts created by users are saved in a MongoDB database using Mongoose for seamless integration.

### Delete Functionality
- Users have the option to delete their blog posts if they wish to remove them from the website.

To start the application, run the following command:
```
npm start
```

By default, the website will be accessible at `http://localhost:3000`.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Feel free to suggest new features, report bugs, or improve the existing codebase. Your contributions will be greatly appreciated.
