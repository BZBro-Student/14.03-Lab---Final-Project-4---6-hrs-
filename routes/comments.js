const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next){
  try {
    req.db.query('SELECT * FROM todos;', (err, results) => {
      if (err) {
        console.error('Error fetching comments:', err);
        return res.status(500).send('Error fetching comments');
      }
      res.render('comments', { title: 'Downtown Donuts', todos: results });
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Error fetching items');
  }
});

router.post('/create', function (req, res, next) {
    const { task } = req.body;
    try {
      req.db.query('INSERT INTO todos (task) VALUES (?);', [task], (err, results) => {
        if (err) {
          console.error('Error adding comments:', err);
          return res.status(500).send('Error adding comments');
        }
        console.log('Comment added successfully:', results);
        res.redirect('/comments');
      });
    } catch (error) {
      console.error('Error adding comments:', error);
      res.status(500).send('Error adding comments');
    }
});

router.post('/delete', function (req, res, next) {
    const { id } = req.body;
    try {
      req.db.query('DELETE FROM todos WHERE id = ?;', [id], (err, results) => {
        if (err) {
          console.error('Error deleting comment:', err);
          return res.status(500).send('Error deleting comment');
        }
        console.log('comment deleted successfully:', results);
        res.redirect('/comments');
    });
    }catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).send('Error deleting comment:');
    }
});



module.exports = router;