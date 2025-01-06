const AskQuestionBox = () => {
  return (
    <div className="ask-question-box mt-5">
      <div className="heading fs-4 fw-semibold">Ask Your Question</div>
      <form>
        <div class="form-floating">
          <textarea
            class="form-control mt-2"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label for="floatingTextarea2">Comments</label>
          <div class="d-grid gap-2 col-6 mx-auto mt-3">
            <button class="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AskQuestionBox;
