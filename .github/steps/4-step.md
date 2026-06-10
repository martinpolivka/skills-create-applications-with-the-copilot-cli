## Step 4: Review Your Work in Your Fork

Duck is ready to finalise the development work by reviewing the local changes, checking the commit history, and confirming that everything is pushed to the participant fork. Do not create a pull request back to the original `martinpolivka` repository and do not merge workshop changes there.

### 📖 Theory: Review Before Handoff

Even when workshop work stays in your fork, a short review helps you confirm that the implementation is complete and easy to explain:

- Review the changed files before considering the exercise done.
- Check that commits are on your `participant/<your-name>` branch.
- Confirm that the branch is pushed to your fork.
- Use Copilot CLI to summarise the implementation and suggest follow-up improvements.

#### Code Review with AI Assistance

GitHub Copilot can help you review your forked branch by:

- Summarising the changed files and commits.
- Suggesting improvements to code quality.
- Identifying potential bugs or edge cases.
- Recommending follow-up work for later practice.

#### References

- [Reviewing changes in Git](https://git-scm.com/docs/git-diff)
- [Viewing commit history in Git](https://git-scm.com/docs/git-log)
- [GitHub Copilot as a Code Reviewer](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)

> [!IMPORTANT]
> If you have restarted VS Code or your terminal, you may need to run `copilot --allow-all` and then authenticate with GitHub again by running `!gh auth login` in your terminal,
> or use `/login` from within the Copilot CLI session.

### ⌨️ Activity: Review and Summarise Your Forked Branch

1. Start an interactive Copilot CLI session (if not already in a session):

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --allow-all --enable-all-github-mcp-tools
   > ```

2. Confirm that you are still on your participant branch in your fork and that there are no uncommitted changes:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Confirm I am on my participant branch in my fork.
   > Show me whether there are any uncommitted changes.
   > Do not create a pull request.
   > ```

3. Ask Copilot CLI to review the branch contents and summarise the implementation:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Review the changes in my current branch compared with main.
   > Summarize what changed, call out any potential issues, and suggest
   > any optional follow-up improvements.
   > Do not create a pull request and do not merge anything.
   > ```

4. Push the final branch state to your fork if it is not already published:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Confirm my participant branch is pushed to my fork.
   > If it is not published, push it to my fork.
   > Do not create a pull request.
   > ```

> [!NOTE]
> In this workshop, keep your completed work in your fork. Do not open a pull request back to the original `martinpolivka` repository and do not merge workshop changes there.

5. Create a short handoff summary for yourself:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Create a short summary of the work completed in this forked branch,
   > including the files changed, tests run, and any follow-up ideas.
   > ```

> [!TIP]
> Use `/share gist` in your Copilot CLI session to save your GitHub Skills exercise session
> as a GitHub gist for documentation and future reference!

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure you've committed and pushed all your changes to your fork
- Verify your GitHub authentication with `gh auth status` or `!gh auth status` in Copilot CLI
- Verify your remote points to your fork with `!git remote -v`
- If push fails, check that you cloned your fork and not the original `martinpolivka` repository
- Do not create a pull request back to the original `martinpolivka` repository
- Do not merge workshop changes in the original `martinpolivka` repository

</details>

---

### Navigation

- Next: [Review](x-review.md)
- Previous: [Step 3](3-step.md)
