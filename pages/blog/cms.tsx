export default function CompName() {
  // cms should only be accessible when the password is correct
  //
  // if the password is correct, then the user should be able to edit the blog
  //
  // if the password is incorrect, then the user should be redirected to the blog page
  return (
    <div className="h-screen">
      <form className="cms_form" action="../api/add_blog_entry" method="get">
        <label htmlFor="blog_title">Blog Title</label>
        <input className="form_input" type="text" name="blog_title" />
        <label htmlFor="blog_description">Blog Content</label>
        <textarea className="form_input_d" name="blog_description" />
        <label htmlFor="blog_description">CMS PASSPHRASE</label>
        <input className="form_input" type="password" name="password" />
        <button className="form_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
