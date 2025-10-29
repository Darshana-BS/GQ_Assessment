# Page snapshot

```yaml
- main [ref=e2]:
  - generic [ref=e10]:
    - heading "Welcome" [level=3] [ref=e11]
    - paragraph [ref=e12]: Enter your credentials
    - generic [ref=e13]:
      - generic [ref=e14]:
        - text: Email
        - textbox "Email" [ref=e15]:
          - /placeholder: Enter your email address
      - generic [ref=e16]:
        - text: Password
        - generic [ref=e18]:
          - textbox "Enter your password" [ref=e19]
          - generic [ref=e20]:
            - img [ref=e21]
            - generic [ref=e26]: Toggle password visibility
      - button "Sign In" [ref=e27] [cursor=pointer]
    - generic [ref=e28]:
      - text: By continuing, you agree to our
      - button "Terms of Service" [ref=e29] [cursor=pointer]
      - text: and
      - button "Privacy Policy" [ref=e30] [cursor=pointer]
  - region "Notifications alt+T"
```