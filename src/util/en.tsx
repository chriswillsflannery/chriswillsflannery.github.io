export const en = {
  oop1: {
    title: (
      <h1>Object-Oriented Programming in JS: 1. Data lookup on objects</h1>
    ),
    sub1: <h4>Objects: how do they work?</h4>,
    1: (
      <p>
        Today we will talk about how to retrieve data from objects and a couple
        of pitfalls and edge cases to watch out for.
      </p>
    ),
    2: <p>Here I have defined an object literal:</p>,
    3: (
      <p>
        It has 2 properties or key-value pairs which have string values, as well
        as one key which has a function for a value. We call this a{" "}
        <i>method.</i>
      </p>
    ),
    4: <p>Properties can be retrieved in one of two ways:</p>,
    5: (
      <p>
        We can use dot notation, or bracket notation - which we will discuss
        later. Dot notation is used when we want to look up a property on an
        object, and we know the name of the property we are looking up (in the
        above example, this is <i>fur</i>). So when we directly reference the
        property <i>fur</i> on <b>dog</b>, this will return the associated
        value, &quot;brown&quot;.
      </p>
    ),
    6: (
      <p>
        What happens if we try to reference a property that doesn&apos;t exist?
        For example:
      </p>
    ),
    7: (
      <p>
        If we are not necessarily sure that a property exists on an object, one
        way we can prevent against this is by using the logical <b>OR</b>{" "}
        operator:
      </p>
    ),
    8: (
      <p>
        What we are saying here is, if the property <b>height</b> does not exist
        on <b>dog</b>, then we want to return 10. This is part of a larger
        concept known as <i>defensive coding.</i>
      </p>
    ),
    9: (
      <p>
        What if we want to update a property on an object? Let&apos;s say we
        want to change <b>dog</b>&apos;s eyes to be <i>green.</i> We can
        reassign the property:
      </p>
    ),
    10: (
      <p>
        We can use dot notation here because we know that <i>eyes</i> is an
        existing property on the object. But what would happen if we tried to do
        this with a property that does not exist on the object?
      </p>
    ),
    11: (
      <p>
        It&apos;s not going to update anything - there&apos;s no preexisting
        property called <b>weight</b> to update - rather, it will simply add a
        new property to the object:
      </p>
    ),
    12: <h4>Bracket Notation</h4>,
    13: (
      <p>
        What if we don&apos;t necessarily know the name of the key we are trying
        to reference? Or if for some reason we don&apos;t have access to that
        key?
      </p>
    ),
    14: (
      <p>
        We have declared an object with 2 properties, then a function - this
        function takes in as parameters an object and a name, and attempts to
        lookup this &apos;name&apos; on the object via bracket notation and
        return its corresponding value. So later when we call this function,
        passing in as arguments a reference to the object &apos;scores&apos; and
        the string &apos;chris&apos;, the function will return{" "}
        <b>scores[&apos;chris&apos;]</b>.
      </p>
    ),
    15: (
      <p>
        This is a great pattern because it makes this function reusable - the
        bracket lookup notation allows us to dynamically look up a property on
        the object using a <i>variable</i> rather than the literal name of the
        key.
      </p>
    ),
    16: (
      <p>
        In every object in JavaScript, it is implied that the keys of an object
        are type <i>string</i>:
      </p>
    ),
    17: (
      <p>
        Here, the <i>date</i> is a string and its corresponding value is a
        number. Same thing for <i>price.</i> What if we needed to create a key
        on the object with special characters?
      </p>
    ),
    18: (
      <p>
        For non-alphanumerical key names (here our key has a dash) we can wrap
        the keys in quotes:
      </p>
    ),
    19: (
      <p>
        The we can later lookup <i>price-USD</i> using bracket notation:
      </p>
    ),
  },
  oop2: {
    title: (
      <h1>Object-Oriented Programming in JS: 2. Prototypal Inheritance</h1>
    ),
    sub1: (
      <h4>
        What the heck is an object prototype? This isn&apos;t the Java I know
        and love! Argh!! In this video I break down parent-child relationships
        inherent to all objects in JavaScript and why understanding this
        matters.
      </h4>
    ),
    1: (
      <p>
        So, a fundamental piece of OOP in JavaScript: all objects in JavaScript
        are interconnected in a parent-child relationship. The way that they
        actually connect is via this invisible chain, and the property which
        will give us access to that chain is something called{" "}
        <b>[[Prototype]]</b>.
      </p>
    ),
    2: (
      <p>
        If I open up a new browser tab and enter into the browser devtools, into
        the `console` tab, I want to see that chain link from the parent to the
        child.
      </p>
    ),
    3: (
      <p>
        In JavaScript, there is a single `parent` object which exists as a
        `model` for all of the objects that we create. We want to see what the
        chain link looks like on this parent object. I&apos;m going to create a
        new object using object literal syntax to instantiate it.
      </p>
    ),
    4: (
      <p>
        It says undefined - I haven&apos;t actually done anything with this
        variable yet, so this is expected. What I want to do is look at the
        properties of myObj - I&apos;m going to open this little triangle icon
        to view this object&apos;s properties:
      </p>
    ),
    5: (
      <p>
        This is a new object, it has no properties yet, because I haven&apos;t
        done anything inside of it yet. But it has this one, kind of greyed-out,
        secret property, called <b>[[Prototype]]</b>. So where does this link
        to? Well, it&apos;s a pointer to another object - if you&apos;ve seen
        some of my other videos, we know that this all objects in JavaScript are
        `passed by reference`. So it is referencing another object called
        `Object`.
      </p>
    ),
    6: (
      <p>
        If we open this panel up we&apos;ll see all of the properties of Object.
        Now this chain, this connection between Object and all of the regular
        objects we create, is called the <i>Prototypal Chain</i>. It is called
        this because anytime we have this parent-child relationship between 2
        objects, the parent is called the object&apos;s `Prototype`.
      </p>
    ),
    7: (
      <p>
        All objects in JavaScript inherit from Object. If I create more objects,
        they will all have a prototypal link to Object.
      </p>
    ),
    8: (
      <p>
        Similarly, we have something in JavaScript called Array. And when I
        create a new array, using array literal syntax (square brackets), this
        will now inherit properties from Array. So Array will be the Prototype
        of the array I just created. Interestingly, the Prototype of Array is
        Object. This means that when I instantiate a new array, it will inherit
        all of the available properties of the parent Prototype Array, as well
        as all of the properties of the grandparent Prototype Object.
      </p>
    ),
    9: (
      <p>
        If we re-enter the browser devtools and create a new array, then view
        the properties of this array, we can see a [[Prototype]] link to Array,
        then in Array we can see a [[Prototype]] link to Object.
      </p>
    ),
    10: (
      <p>
        So we always refer to an object&apos;s parent as its Prototype. But an
        object&apos;s prototype doesn&apos;t necessarily need to be Array or
        Object. We can actually create this parent-child relationships between 2
        objects that we create, so that one can inherit properties from the
        other. In the past (up to ES6), we used do this using a special method
        called <b>Object.create().</b> Nowadays, this method is essentially
        deprecated, but it is still instructive to show how the language works
        under the hood.
      </p>
    ),
    11: (
      <p>
        So we&apos;ve created a new object here, <b>myPerson</b>, and we want
        this to act as the `parent`, so that other objects can have a link to
        myPerson. If I create an object called Chris, using Object.create()...
      </p>
    ),
    12: (
      <p>
        ...And if I were to pass in null, what do we think will happen? This
        will create an empty object. In the past, this newly created object
        would have a [[Prototype]] link, but interestingly, this seems to have
        now been removed as a feature. Where do we think the [[Prototype]] of
        this new object would have linked to? Well, if we use null here, then
        the [[Prototype]] would link up to Object, just like what we saw when we
        created a new object using object literal syntax (brackets). These days,
        with improvements to the language, Object.create(null) actually just
        seems to create an empty object with nothing inside it at all!
      </p>
    ),
    13: (
      <p>
        I want my <b>chris</b> object to inherit properties from{" "}
        <b>myPerson.</b> In other words, I want myPerson to be the parent, and
        chris to be the child. How do we do that? We will pass in myPerson as
        the argument to Object.create().
      </p>
    ),
    14: (
      <p>
        Let&apos;s now take a look at <b>chris</b> in the browser devtools and
        see what happened - I&apos;m going to paste this in:
      </p>
    ),
    15: (
      <p>
        We see here that Object.create() created an object - and let&apos;s open
        it up and take a look at its properties - let&apos;s see where the
        [[Prototype]] links to:
      </p>
    ),
    16: (
      <p>
        We can see that the properties of its Prototype - its parent - are the
        properties of myPerson. And we can see that this object&apos;s
        [[Prototype]] links to Object. So you can see that by using the
        Object.create() method, passing in a reference to another object, we
        have effectively created a parent-child relationship between 2 objects
        which we have created. We&apos;ll explore why this is useful in more
        depth later.
      </p>
    ),
    17: (
      <p>
        Why is this useful? When we want to look up a property on an object,
        that object might not have the property we are looking for. So what
        JavaScript will do is it will say, okay, this current object
        doesn&apos;t have the property we&apos;re looking for, so let&apos;s
        look up the prototypal chain to see if maybe some ancestor of this
        object has that property. If this property doesn&apos;t exist anywhere
        in the prototypal chain, it will return <i>undefined.</i>
      </p>
    ),
    18: (
      <p>
        This process of searching up the prototypal chain is called{" "}
        <i>delegation.</i>
      </p>
    ),
  },
  oop3: {
    title: <h1>Object-Oriented Programming in JS: 3. Data Manipulation</h1>,
    sub1: (
      <h4>
        Breaking down reflection, enumeration and deletion - 3 critical pieces
        of working with data in objects.
      </h4>
    ),
    1: (
      <p>
        As we saw in the previous OOP article, we can use the Object.create()
        method to create a new object which links up to another object, and when
        we have this parent-child relationship, the parent object is called the
        child&apos;s <b>Prototype.</b>
      </p>
    ),
    2: (
      <p>
        In the example below, <b>myPerson</b> would be considered the Prototype
        of <b>chris.</b>
      </p>
    ),
    3: (
      <p>
        If you want to know whether an object has a property, we can look it up
        using either dot or bracket notation. What if we were to look up a
        property that does not exist on the object? For example,{" "}
        <b>chris.hands</b> would yield the value undefined. But what if we want
        to look up a property that exists further up the prototypal chain?
      </p>
    ),
    4: (
      <p>
        If we try and reference <b>chris.arms</b> the JavaScript interpreter
        will first look on the <i>chris</i> object, see that it&apos;s not
        there, then attempt to look further up the prototypal chain, up to{" "}
        <i>myPerson</i>, and there it will see that myPerson does indeed have
        the property <b>arms</b>, and it will return the corresponding value, 2.
      </p>
    ),
    5: (
      <p>
        So using dot or bracket notation to lookup a property doesn&apos;t
        necessarily guarantee that that that property is on the object itself -
        it might be on that object&apos;s prototype. So how can we be sure that
        a property exists on the object itself?
      </p>
    ),
    6: (
      <p>
        One way to accomplish this is by using the <b>hasOwnProperty</b> method.
        Let&apos;s give this a try:
      </p>
    ),
    7: (
      <p>
        We can see from the above example that no, the object <b>chris</b>{" "}
        itself does not have the property <b>arms.</b>
      </p>
    ),
    8: (
      <p>
        Another way to check if an object has a property: we can use the{" "}
        <b>for..in</b> loop to loop over the properties of an object, for
        example:
      </p>
    ),
    9: (
      <p>
        The issue with this is that when I console.log() each key, the for..in
        loop will not only loop over the keys of <b>chris</b> itself, but it
        will also loop over any keys I have created on that object&apos;s
        prototype. So, we can combine a for..in loop with the{" "}
        <b>hasOwnProperty</b> method:
      </p>
    ),
    10: (
      <p>
        In the above example we can use hasOwnProperty to filter out the
        properties which we don&apos;t care about. One thing to bear in mind
        during this process is that the order of keys in an object is not
        necessarily guaranteed. So if you need a solution that ensures the keys
        are always in order, you can reach for a different data structure like a
        Map, or make sure your object is always sorted.
      </p>
    ),
    11: (
      <p>
        You can also use an array, and if you&apos;re using some sort of method
        to loop over the array, you don&apos;t need to worry about properties
        that exist up the prototypal chain, but there might be some performance
        drawbacks to using an array over an object. You can learn more about
        this by studying Big O Notation, specifically around constant time
        lookup of Objects, and linear time lookup of Array elements.
      </p>
    ),
    12: (
      <p>
        If we want to delete a property from an object, for example, if we have
        a property on chris:
      </p>
    ),
    13: (
      <p>
        What if we want to delete this property from chris? We can use the
        delete keyword:
      </p>
    ),
    14: (
      <p>
        However, what would happen if we try to delete a property that exists
        further up the prototypal chain?
      </p>
    ),
    15: (
      <p>
        Does chris still have the property arms - which exists up the chain?
        Yes, it still does. So I was not able to delete a property up the chain
        using <b>delete.</b> So in order to delete that property <b>arms</b>, I
        would need to either remove the link between chris and myPerson, or
        delete <b>arms</b> directly from myPerson. When we have properties that
        exist up the chain which cannot be deleted, they are called{" "}
        <i>non-configurable properties.</i>
      </p>
    ),
    16: (
      <p>
        Any properties that exist on objects by default, such as{" "}
        <b>Object.hasOwnProperty</b> or <b>Array.push</b>, are considered
        non-configurable properties. They exist by default - they are there
        natively - and they cannot be deleted.
      </p>
    ),
  },
};
