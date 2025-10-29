# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e8]:
      - img "Go Quant Logo" [ref=e11]
      - generic [ref=e12]:
        - heading "Welcome" [level=3] [ref=e13]
        - paragraph [ref=e14]: Enter your credentials
        - generic [ref=e15]:
          - generic [ref=e16]:
            - text: Email
            - textbox "Email" [ref=e17]:
              - /placeholder: Enter your email address
          - generic [ref=e18]:
            - text: Password
            - generic [ref=e20]:
              - textbox "Enter your password" [ref=e21]
              - generic [ref=e22]:
                - img [ref=e23]
                - generic [ref=e28]: Toggle password visibility
          - button "Sign In" [ref=e29] [cursor=pointer]
        - generic [ref=e30]:
          - text: By continuing, you agree to our
          - button "Terms of Service" [ref=e31] [cursor=pointer]
          - text: and
          - button "Privacy Policy" [ref=e32] [cursor=pointer]
    - region "Notifications alt+T"
  - alert [ref=e33]
```