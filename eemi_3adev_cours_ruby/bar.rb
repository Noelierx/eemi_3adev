foo = 'bar'
$foo = 'baz'
HELLO = 'foo'
class Lorem
    def self.bar(foo)
        @@foo =foo
    end
    
    def self.baz
        @@foo
    end
end

Lorem.bar('bar')