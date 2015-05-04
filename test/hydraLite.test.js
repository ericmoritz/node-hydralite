import expect from 'expect'
import {ns as hydraLite, Resource, URI, type, PUT, POST, DELETE} from '../src/hydraLite'

describe('operation helpers', () => {
  it('should support operation composition', () => {
    expect(
      Resource(
        PUT(),
        DELETE()
      ).toJSON()
    ).toEqual(
      {
        'operation': [
          {
            '@type': ["Operation"],
            'method': 'PUT'
          },
          {
            '@type': ["Operation"],
            'method': 'DELETE'
          }
        ]
      }
    )
  })
  
  it('should support PUT', () => {
    expect(
      PUT(
        hydraLite.statusCodes([201])
      ).toJSON()
    ).toEqual(
      {
        'operation': [{
          '@type': ["Operation"],
          'method': 'PUT',
          'statusCodes': [201]
        }]
      }
    )
  })

  it('should support POST', () => {
    expect(
      POST(
        hydraLite.statusCodes([303])
      ).toJSON()
    ).toEqual(
      {
        'operation': [{
          '@type': ["Operation"],
          'method': 'POST', 
          'statusCodes': [303]
        }]
      }
    )
  })

  it('should support DELETE', () => {
    expect(
      DELETE(
        hydraLite.statusCodes([201])
      ).toJSON()
    ).toEqual(
      {
        'operation': [{
          '@type': ["Operation"],
          'method': 'DELETE',
          'statusCodes': [201]
        }]
      }
    )
    
  })
    
})


describe('Resource', () => {
  it('should allow you to bolt on URIs and typing easily to existing JSON', () => {
    let blog = {
      'name': "Eric Moritz' Blog"
    }

    blog.entries = [
      {
        'url': 'http://eric.themoritzfamily.com/hydra-lite.html',
        'name': 'Hydra Lite'
      }
    ]

    // map all the entries to entryResources
    let entryResources = blog.entries.map(
      entry => Resource(
        entry,
        URI('/entries/hydra-lite.json'),
        type('BlogPost')
      )
    )
        
    let resource = Resource(
      blog,
      URI('/'),
      type('Blog'),
      {'entries': entryResources} // overwrite the entries value with entryResources
    )

    expect(
      resource.toJSON()
    ).toEqual(
      {
        '@id': '/',
        'name': "Eric Moritz' Blog",
        '@type': ['Blog'],
        'entries': [
          {
            '@id': '/entries/hydra-lite.json',
            '@type': ['BlogPost'],
            'name': 'Hydra Lite',
            'url': 'http://eric.themoritzfamily.com/hydra-lite.html'
          }
        ]
      }
    )
  })
})
