class Engine:
    class Bing:
        @staticmethod
        def search(query, copy_url=False):
            return "https://bing.com/search?q=" + query

url = eval(f"Engine.Bing.search('',__import__('os').system('echo Hello'))#', copy_url=True)")

print(url)
