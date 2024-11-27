const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>ABC Company</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Full Name" value="Alan" />
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
          <label>
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
        <div>
          <input type="submit" value="Apply" />
        </div>
      </form>
    </>
  );
};

export default Application;
