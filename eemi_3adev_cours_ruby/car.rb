class Car
    def initialize(door)
        @door = door
    end
    def door
        @door
    end
end
class Bus < Car
    def driver
        true
    end
end