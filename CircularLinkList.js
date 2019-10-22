// Doubly Linked List
module.exports = CircularLinkedList;
function CircularLinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;;
        this.prev = null;
    };
    var length = 0;
    var head = null;
    var tail = null;
    var work; //記錄目前的working node

    this.append = function (element) {
        var node = new Node(element),
            current, 
            previous;
        if (head === null) {
            head = node;
            tail = node;
            head.prev = tail;
            tail.next = head;
            work = head;
        }
        else {
            current = tail;          
            current.next = node;
            tail = node;
            tail.prev = current;
            tail.next = head;
            head.prev = tail;
        }
        length++;
    };

    this.removeAt = function (position) {
        if (position > -1 && position < length) { //檢查有無越界
            var current = head,
                previous,
                index = 0;
            if (position === 0) {
                head = current.next;
                if (length === 1) {
                    tail = null; //head和tail皆為0
                }
                else {
                    head.prev = tail;
                    tail.next = head;
                }
            }
            else if (position === length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = head;
                head.prev = tail;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.prev = previous;
            }

            length--;
            return current.element;
        }
        else
            return null;
    };

    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                }
                else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            }
            else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            }
            else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }

            length++;
            return true;
        }
        else
            return false;
    };

    this.toString = function () {
        var current = head,
            string = "";
        while (current) {
            string += current.element;
            string += "-";
            if (current === tail) //此法看來OK
                break;
            current = current.next;
        }
        return string;
    };

    this.indexOf = function (element) {
        var current = head;
        var index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.remove = function (element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    this.getHead = function () {
        return head;
    };

    this.advance = function () { //往前一步
        work = work.next;
    };

    this.backward = function () { //往前一步
        work = work.prev;
    };

    this.delete_work = function () {
        if (this.size() > 0) {
            var deleted = work;
            var previous = work.prev;
            var nextone = work.next;
            previous.next = nextone;
            nextone.prev = previous;
            work = nextone;
            length--;
            return deleted;
        }
        return null;
    };

    this.work = function () {
        return work;
    }
}

//var list = new CircularLinkedList();
//list.append(12);
//list.append(13);
//list.append(14);
//console.log("test start");
//console.log(list.toString());
//list.remove(14);
//list.append(15);
//console.log(list.toString());
