const assert = require('assert');
const User = require('../src/user');

describe('Reading User Out of DateBase',(done)=>{
    let joe;
    beforeEach((done)=>{
        joe = new User({name:'Nikunj'});
        joe.save()
        .then(()=>{
            done();
        });
    });

    it('Find All User By Name of Nikunj',(done)=>{
         User.find({name:'Nikunj'})
            .then((users)=>{
             console.log(`db id is ${users[0].id} and joe id is ${joe._id}`);
                assert(users[0]._id.toString() === joe._id.toString());
                done();
            });
    });

    it('Find Particular User By ID',(done)=>{
        User.findOne({_id: joe._id})
           .then((users)=>{
               assert(users.name === 'Nikunj');
               done();
           });
   });
});