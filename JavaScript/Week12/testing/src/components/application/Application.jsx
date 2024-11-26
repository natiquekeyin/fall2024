const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <textArea id="bio" />
      </div>
      <div>
        <label htmlFor="job-location">Job Location</label>
        <select id="job-location">
          <option value="">Select a Country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="GB">United Kingdom</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Apply" />
      </div>
    </form>
  );
};

export default Application;
