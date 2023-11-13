# https://leetcode.com/problems/design-browser-history/

# * 1472. Design Browser History

class BrowserHistory:

    def __init__(self, homepage: str):
        self.i = 0
        self.len = 1
        self.history = [homepage]

    def visit(self, url: str) -> None:
        self.history = self.history[:self.i + 1]
        self.history.append(url)
        self.len = len(self.history)
        self.i = self.len - 1

    def back(self, steps: int) -> str:
        if steps > self.i:
            self.i = 0
        else:
            self.i -= steps
        return str(self.history[self.i])

    def forward(self, steps: int) -> str:
        if steps > self.len - 1 -  self.i:
            self.i = self.len - 1
        else:
            self.i += steps
        return str(self.history[self.i])
        


# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)
