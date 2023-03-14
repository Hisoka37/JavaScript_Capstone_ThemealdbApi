import '../src/style.css';

const popUp = document.querySelector('.pop-up');

popUp.innerHTML = `
<div class='pop-container'>
<div class="close-btn">X</div>
<section class="meal-img">
</section>
<section class="pop-info">
<h3>Name of Meal</h3>
<ul class="meal-info">
<li><div>Fuel:</div><div>Length:</div></li>
<li><div>Weight:</div><div>Power:</div></li>
</ul>
<h4>Comments (<span id="number-of-comments"></span>)</h4>
<ul class="comments">
<li></li>
<li><span id="date">Date</span><span id="name">Name</span><span id="comment">Comment</span></li>
<li><span id="date">Date</span><span id="name">Name</span><span id="comment">Comment</span></li>
</ul>
<h4>Add a comment</h4>
<ul class="add-comment">
<li><input type="text" placeholder="Your name" name="user-name"></li>
<li><textarea name="new comment" id="new-comment" cols="25" rows="5" placeholder="your insights"></textarea></li>
<li><button id="comment-btn">Comment</button></li>
</ul>
</section>
</div>
`;

// eslint-disable-next-line import/prefer-default-export
export { popUp };